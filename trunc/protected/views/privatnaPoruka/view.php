<?php
/* @var $this PrivatnaPorukaController */
/* @var $model PrivatnaPoruka */

$this->breadcrumbs=array(
	'Privatna Porukas'=>array('index'),
	$model->idPrivatnaPoruka,
);

$this->menu=array(
	array('label'=>'List PrivatnaPoruka', 'url'=>array('index')),
	array('label'=>'Create PrivatnaPoruka', 'url'=>array('create')),
	array('label'=>'Update PrivatnaPoruka', 'url'=>array('update', 'id'=>$model->idPrivatnaPoruka)),
	array('label'=>'Delete PrivatnaPoruka', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->idPrivatnaPoruka),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage PrivatnaPoruka', 'url'=>array('admin')),
);
?>

<h1>View PrivatnaPoruka #<?php echo $model->idPrivatnaPoruka; ?></h1>

<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'idPrivatnaPoruka',
		'vrijemeSlanja',
		'naslov',
		'poruka',
		'Korisnici_idKorisnik',
		'Korisnici_idKorisnik1',
	),
)); ?>
