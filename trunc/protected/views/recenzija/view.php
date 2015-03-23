<?php
/* @var $this RecenzijaController */
/* @var $model Recenzija */

$this->breadcrumbs=array(
	'Recenzijas'=>array('index'),
	$model->idRecenzija,
);

$this->menu=array(
	array('label'=>'List Recenzija', 'url'=>array('index')),
	array('label'=>'Create Recenzija', 'url'=>array('create')),
	array('label'=>'Update Recenzija', 'url'=>array('update', 'id'=>$model->idRecenzija)),
	array('label'=>'Delete Recenzija', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->idRecenzija),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage Recenzija', 'url'=>array('admin')),
);
?>

<h1>View Recenzija #<?php echo $model->idRecenzija; ?></h1>

<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'idRecenzija',
		'datumObjave',
		'Opis',
		'Objekat_idObjekat',
		'Korisnici_idKorisnik',
	),
)); ?>
