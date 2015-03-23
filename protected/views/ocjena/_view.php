<?php
/* @var $this OcjenaController */
/* @var $data Ocjena */
?>

<div class="view">

	<b><?php echo CHtml::encode($data->getAttributeLabel('idOcjena')); ?>:</b>
	<?php echo CHtml::link(CHtml::encode($data->idOcjena), array('view', 'id'=>$data->idOcjena)); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('vrijednost')); ?>:</b>
	<?php echo CHtml::encode($data->vrijednost); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('Objekat_idObjekat')); ?>:</b>
	<?php echo CHtml::encode($data->Objekat_idObjekat); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('Korisnici_idKorisnik')); ?>:</b>
	<?php echo CHtml::encode($data->Korisnici_idKorisnik); ?>
	<br />


</div>