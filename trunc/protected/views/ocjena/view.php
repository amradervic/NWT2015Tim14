<?php
/* @var $this OcjenaController */
/* @var $model Ocjena */

$this->breadcrumbs=array(
	'Ocjenas'=>array('index'),
	$model->idOcjena,
);

$this->menu=array(
	array('label'=>'List Ocjena', 'url'=>array('index')),
	array('label'=>'Create Ocjena', 'url'=>array('create')),
	array('label'=>'Update Ocjena', 'url'=>array('update', 'id'=>$model->idOcjena)),
	array('label'=>'Delete Ocjena', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->idOcjena),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage Ocjena', 'url'=>array('admin')),
);
?>

<h1>View Ocjena #<?php echo $model->idOcjena; ?></h1>

<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'idOcjena',
		'vrijednost',
		'Objekat_idObjekat',
		'Korisnici_idKorisnik',
	),
)); ?>
